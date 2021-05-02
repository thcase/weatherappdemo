/**
 * Provides Footer Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

import React from 'react'

const Footer = () => {
  const currentYear = new Date(Date.now()).getFullYear()
  return (
    <footer className="text-center">
      <div>&copy; {currentYear} T.H. Case</div>
      <div>Background Photo by <a
        href="https://unsplash.com/@landscapeplaces?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Federico
        Bottos</a> on <a
        href="https://unsplash.com/t/spirituality?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </footer>
  )
}

export default Footer
