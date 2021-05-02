/**
 * Provides Header Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

import React from 'react'
import { Cloud } from "react-bootstrap-icons"

const Header = () => {
    return (
        <header>
          <h1 className="text-center"><Cloud></Cloud> Demo Weather App</h1>
        </header>
    )
}

export default Header
