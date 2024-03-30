"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TranslationLanguages } from "@/typings";

interface TranslationFormProps {
  languages: TranslationLanguages;
}

const TranslationForm = ({ languages }: TranslationFormProps) => {
  return (
    <div>
      <form>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Want us to figure it out?</SelectLabel>
              <SelectItem key="auto" value="auto">
                Auto-Detection
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Language</SelectLabel>
              {Object.entries(languages.translation).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </form>
    </div>
  );
};

export default TranslationForm;
