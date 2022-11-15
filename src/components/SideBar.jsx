import React from "react";
import { NavLink as NavLinkRouterReact } from 'react-router-dom'

const NavLink = ({ to, children, ...props}) => {
  return (
    <NavLinkRouterReact 
    { ...props }
    className={({isActive}) => isActive ? 'text-active bg-darki' : undefined}
    to={to}
    >{children}
    </NavLinkRouterReact>
  )
}

const SideBar = () => {
    return <>
      <div className="bg-dark dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
          <div className="text-sdch  h-16 text-blue-500 flex items-center justify-center">
            <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
              <path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" />
            </svg>
          </div>
          <div className="text-sdch flex flex-grow mt-12 flex-col text-gray-400 space-y-4">
            <NavLink to="/home">
              <div className="h-14 w-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </NavLink>
            <NavLink className={({isActive}) => {
              console.log({isActive})
              return isActive ? 'text-active bg-darki' : undefined
            }} to="/about">
            <div className="h-14 w-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            </NavLink>
            <NavLink className={({isActive}) => {
              console.log({isActive})
              return isActive ? 'text-active bg-darki' : undefined
            }} to="/culo">
            <div className="h-14 w-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                <line x1="12" y1="11" x2="12" y2="17"></line>
                <line x1="9" y1="14" x2="15" y2="14"></line>
              </svg>
            </div>
            </NavLink>
            <NavLink className={({isActive}) => {
              console.log({isActive})
              return isActive ? 'text-active bg-darki' : undefined
            }} to="/otro">
            <div className="h-14 w-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            </NavLink>
            <NavLink className={({isActive}) => {
              console.log({isActive})
              return isActive ? 'text-active bg-darki' : undefined
            }} to="/beer">
              <div className="h-14 w-full flex items-center justify-center">
                <svg className="beer-svg" width="24" height="38" viewBox="0 0 138 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.17578 128C8.74229 131.624 9.71024 134.597 11.2691 137.24C13.653 141.282 16.9519 144.709 20.9007 147.244C28.3074 152 38.612 152 59.2211 152C79.8302 152 90.1347 152 97.5415 147.244C101.49 144.709 104.789 141.282 107.173 137.24C108.732 134.597 109.7 131.624 110.266 128H8.17578Z" fill="#FAD000" />
                  <rect class="beer-height" x="33" y="24" width="93" height="0" fill="#FAD000" />
                  <path d="M107 59H122.466C129.663 59 135.241 65.2916 134.379 72.437L131.123 99.437C130.395 105.465 125.281 110 119.209 110H107" stroke="black" stroke-width="6" />
                  <path d="M105.847 70.0425L106.928 98.1551C107.339 108.851 107.635 116.649 107.256 122.749C106.88 128.803 105.85 132.843 103.833 136.127C101.796 139.447 99.0637 142.285 95.8254 144.449C92.6208 146.591 88.623 147.775 82.5888 148.383C76.5076 148.996 68.7038 149 58 149C47.2962 149 39.4924 148.996 33.4112 148.383C27.377 147.775 23.3792 146.591 20.1746 144.449C16.9363 142.285 14.2045 139.447 12.1666 136.127C10.1499 132.843 9.1205 128.803 8.74418 122.749C8.36493 116.649 8.66118 108.851 9.07241 98.1551L10.1533 70.0425C10.5177 60.5631 10.7862 53.6592 11.4991 48.2568C12.2061 42.8992 13.3193 39.3125 15.1995 36.3903C17.4779 32.8493 20.5529 29.8903 24.1787 27.7496C27.171 25.983 30.7979 25.0085 36.1786 24.5079C41.6045 24.003 48.5135 24 58 24C67.4865 24 74.3955 24.003 79.8214 24.5079C85.2021 25.0085 88.829 25.983 91.8213 27.7496C95.4471 29.8903 98.5221 32.8493 100.801 36.3903C102.681 39.3125 103.794 42.8992 104.501 48.2568C105.214 53.6592 105.482 60.5631 105.847 70.0425Z" stroke="black" stroke-width="6" />
                  <path d="M34 59V115" stroke="black" stroke-width="6" stroke-linecap="round" />
                  <path d="M57 59V115" stroke="black" stroke-width="6" stroke-linecap="round" />
                  <path d="M80 59V115" stroke="black" stroke-width="6" stroke-linecap="round" />
                  <g>
                  <circle cx="12" cy="40" r="12" fill="white" />
                  <circle cx="77" cy="22" r="12" fill="white" />
                  <circle cx="33.5" cy="38.5" r="11.5" fill="white" />
                  <circle cx="34.5" cy="44.5" r="12.5" fill="white" />
                  <circle cx="34.5" cy="80.5" class="beer-drop" r="11.5" fill="white" />
                  <circle cx="98.5" cy="33.5" r="17.5" fill="white" />
                  <circle cx="81" cy="41" r="16" fill="white" />
                  <circle cx="55.5" cy="48.5" r="16.5" fill="white" />
                  <circle cx="25" cy="25" r="17" fill="white" />
                  <circle cx="51" cy="21" r="21" fill="white" />
                  </g>
                </svg>
              </div>
            </NavLink>
          </div>
        </div>
    </>

}

export default SideBar