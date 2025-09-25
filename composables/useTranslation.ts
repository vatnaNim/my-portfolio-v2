import { 
    Khmer,
    English
} from "~/store/json"

type Language = 'en' | 'km'
type TranslationsData = Record<string, string>

interface Translations {
    language: Language
    data: TranslationsData
}

const langs: Record<Language, TranslationsData> = { en: English, km: Khmer }
const translations: Ref<Translations> = ref<Translations>({
    language: 'en',
    data: langs.en
})

const save = (): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('translations', JSON.stringify({ language: translations.value.language }))
    }
}

const toggleLanguage = (): void => {
    const newLang: Language = translations.value.language === 'en' ? 'km' : 'en'
    translations.value.language = newLang
    translations.value.data = langs[newLang]
    save()
}

const t = (key: string) => translations.value.data[key] || key

export const useTranslation = () => {
  onMounted((): void => {
    const saved = localStorage.getItem('translations')
    if (saved) {
        try {
            const parsed = JSON.parse(saved)
            if (parsed.language && parsed.language in langs) {
                translations.value.language = parsed.language
                translations.value.data = langs[parsed.language as Language]
            }
        } catch {
            translations.value.language = 'en'
            translations.value.data = langs.en
        }
    }
})

    return {
        translations,
        toggleLanguage,
        t
    }
}
