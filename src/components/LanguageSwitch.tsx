'use client'

import { FC, useEffect, useState } from 'react'

const LanguageSwitch: FC = () => {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh')

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as 'zh' | 'en'
    if (storedLang) {
      setLanguage(storedLang)
      document.documentElement.setAttribute('data-language', storedLang)
    }
  }, [])

  const handleLanguageChange = () => {
    const newLang = language === 'zh' ? 'en' : 'zh'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
    document.documentElement.setAttribute('data-language', newLang)
    
    // 触发自定义事件
    const event = new CustomEvent('languageChange', {
      detail: { language: newLang }
    })
    window.dispatchEvent(event)
  }

  return (
    <button
      onClick={handleLanguageChange}
      onKeyDown={(e) => e.key === 'Enter' && handleLanguageChange()}
      className="fixed top-4 right-4 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      aria-label={language === 'zh' ? '切换到英文' : 'Switch to Chinese'}
      role="button"
      tabIndex={0}
    >
      {language === 'zh' ? 'EN' : '中'}
    </button>
  )
}

export default LanguageSwitch 