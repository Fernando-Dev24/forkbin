"use client";

import { useCallback, useState } from "react";
import {
  Editor,
  type OnChange,
  type BeforeMount,
  type OnMount,
} from "@monaco-editor/react";
import { EditorLoading } from "./editor-loading";
import { forkbinTheme } from "./forkbin-theme";
import { generateUUID } from "@/helpers/uuid/generate-uuid";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import clsx from "clsx";

type EditorRefType = Parameters<OnMount>[0];
interface ErrorType {
  id: string;
  message: string;
}

const initialCode = `{
   \t"nexts steps": [
      \t"1. Edit this JSON bin",
      \t"2. Use it through API"
   ]
}`;

export const EditorWrapper = () => {
  const [codeValue, setCodeValue] = useState(initialCode);
  const [parsedValue, setParsedValue] = useState<object | null>(
    JSON.parse(initialCode)
  );
  const [codeErrors, setCodeErrors] = useState<ErrorType[]>([]);

  const handleChange: OnChange = useCallback((value, editor) => {
    setCodeValue(value || "");
    setCodeErrors([]);

    if (!value || value.trim() === "") {
      setParsedValue(null);
      return;
    }

    try {
      setParsedValue(JSON.parse(value));
    } catch (error) {
      setParsedValue(null);
      if (error instanceof SyntaxError) {
        setCodeErrors((prev) => [
          ...prev,
          { id: generateUUID(), message: error.message },
        ]);
      }
    }
  }, []);

  // Before mount in DOM
  const handleEditorWillMount: BeforeMount = (monacoInstance) => {
    monacoInstance.editor.defineTheme("forkbin", { ...forkbinTheme });
    monacoInstance.editor.setTheme("forkbin");
  };

  return (
    <div className="my-10">
      <h4 className="mb-5 uppercase font-semibold text-accent-foreground">
        YOUR JSON CONTENT
      </h4>

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
};
