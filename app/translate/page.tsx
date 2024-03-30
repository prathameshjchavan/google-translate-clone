import { auth } from "@clerk/nextjs/server";

import TranslationForm from "@/components/translation-form";
import { TranslationLanguages } from "@/typings";

const TranslatePage = async () => {
  auth().protect();

  const { userId } = auth();
  if (!userId) throw new Error("User not logged in");

  const languages: TranslationLanguages = await fetch(
    process.env.AZURE_LANGUAGES_ENDPOINT!,
    {
      next: {
        revalidate: 60 * 60 * 24, // Cache the results for 24 hours and then refresh
      },
    },
  ).then((response) => response.json());

  return (
    <div>
      <TranslationForm languages={languages} />
      {/* TranslationHistory */}
    </div>
  );
};

export default TranslatePage;
