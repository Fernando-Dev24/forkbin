"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { EditorFieldProps } from "@/interfaces";
import { BeforeMount, Editor, OnChange } from "@monaco-editor/react";
import { useCallback, useState } from "react";
import { Controller, FieldPathByValue, FieldValues } from "react-hook-form";
import { forkbinTheme } from "./forkbin-theme";
import clsx from "clsx";
import { EditorLoading } from "./editor-loading";

const initialSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    example: { type: "string" },
  },
};

export const SchemaEditor = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPathByValue<TFieldValues, string> = FieldPathByValue<
    TFieldValues,
    string
  >
>({
  control,
  name,
  content,
}: EditorFieldProps<TFieldValues, TName>) => {
  const [schemaValue, setSchemaValue] = useState(
    JSON.stringify(content || initialSchema, null, 2)
  );
  const { open } = useSidebar();

  const handleEditorWillMount: BeforeMount = (monacoInstance) => {
    monacoInstance.editor.defineTheme("forkbin", { ...forkbinTheme });

    // CONFIGURACIÓN ESPECIAL:
    // Le decimos a Monaco que este editor debe validarse como un JSON Schema oficial
    monacoInstance.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: "http://json-schema.org/draft-07/schema#", // URL oficial del meta-schema
          fileMatch: ["schema.json"], // Solo aplica a este editor
        },
      ],
    });
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const handleChange: OnChange = useCallback(
          (value, _) => {
            setSchemaValue(value || "{}");
            field.onChange(value || "{}");
          },
          [field]
        );

        return (
          <div className={clsx("w-full", { "w-[95%]!": open })}>
            {/* Alert de errores de sintaxis */}

            <div className="w-full h-[400px] text-xl border border-foreground/10">
              <Editor
                path="schema.json" // Coincide con el fileMatch del beforeMount
                defaultLanguage="json"
                language="json"
                options={{
                  minimap: { enabled: false },
                  fontSize: 16,
                  fontFamily: "'Fira Code', monospace",
                }}
                theme="forkbin"
                beforeMount={handleEditorWillMount}
                value={schemaValue}
                onChange={handleChange}
                loading={<EditorLoading />}
              />
            </div>
          </div>
        );
      }}
    />
  );
};
