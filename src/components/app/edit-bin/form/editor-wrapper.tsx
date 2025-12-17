"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Editor,
  type OnChange,
  type BeforeMount,
  OnMount,
} from "@monaco-editor/react";
import { EditorLoading } from "./editor-loading";
import { forkbinTheme } from "./forkbin-theme";
import { generateUUID } from "@/helpers/uuid/generate-uuid";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import clsx from "clsx";
import { Controller, FieldPathByValue, FieldValues } from "react-hook-form";
import { EditorFieldProps } from "@/interfaces";
import { useSidebar } from "@/components/ui/sidebar";

interface ErrorType {
  id: string;
  message: string;
}

const initialCode = `{
   \t"nexts steps": [
      \t"1. Edit this JSON bin",
      \t"2. Use it through our API"
   ]
}`;

export const EditorWrapper = <
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
  const [codeValue, setCodeValue] = useState(
    JSON.stringify(content || initialCode, null, 2)
  );
  const [codeErrors, setCodeErrors] = useState<ErrorType[]>([]);
  const { open } = useSidebar();

  // Before mount in DOM
  const handleEditorWillMount: BeforeMount = (monacoInstance) => {
    monacoInstance.editor.defineTheme("forkbin", { ...forkbinTheme });
    monacoInstance.editor.setTheme("forkbin");
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const handleChange: OnChange = useCallback((value, _) => {
          setCodeValue(value || "");
          setCodeErrors([]);

          if (!value || value.trim() === "") {
            field.onChange(null);
            return;
          }

          try {
            field.onChange(JSON.parse(value));
          } catch (error) {
            field.onChange(null);
            if (error instanceof SyntaxError) {
              setCodeErrors((prev) => [
                ...prev,
                { id: generateUUID(), message: error.message },
              ]);
            }
          }
        }, []);

        return (
          <div
            className={clsx("w-full", {
              "w-[95%]!": open,
            })}
          >
            <Alert
              variant={"destructive"}
              className={clsx("mb-5", {
                hidden: codeErrors.length === 0,
                block: codeErrors.length > 0,
              })}
            >
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                <ul>
                  {codeErrors.map((error, index) => (
                    <li key={error.id}>
                      {index + 1}. {error.message}
                    </li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>

            <div className="w-full h-[600px] text-xl border border-foreground/10">
              <Editor
                path="content.json"
                defaultLanguage="json"
                language="json"
                options={{
                  minimap: { enabled: true },
                  acceptSuggestionOnEnter: "smart",
                  fontSize: 16,
                  fontFamily: "'Fira Code', 'Jetbrains Mono', monospace",
                  guides: { indentation: true },
                }}
                theme="forkbin"
                beforeMount={handleEditorWillMount}
                value={codeValue}
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
