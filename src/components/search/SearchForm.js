/**
 * Provides search Form Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import React from "react"
import { Search } from "react-bootstrap-icons"

// Component
const SearchForm = ({ searchVal, onChange, onSubmit }) => {
  return (
    <form className="mb-3 form-group text-white text-left" onSubmit={e => onSubmit(e)}>
      <label className={'font-weight-bold'}>Look up Weather for:</label>
      <div className={'d-flex'}>
        <input id={'searchVal'} name={'searchVal'} type={'text'} className={'flex-fill pr-3'} placeholder={'Enter City, City plus State, or Address'}
               value={searchVal} onChange={e => onChange(e.target.value)}/>
        <button type={'submit'} className={'btn btn-success'}><Search/></button>
      </div>
    </form>
  );
};

// Export default
export default SearchForm
