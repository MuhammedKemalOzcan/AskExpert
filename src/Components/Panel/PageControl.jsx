import React from 'react'
import { useLayout } from '../../LayoutContext';

function PageControl() {

  const { useHeader1, setUseHeader1, useFooter1, setUseFooter1, useHomepage1, setUseHomepage1 } = useLayout();

  return (
    <div className='w-[full] h-[820px] flex justify-center items-center '>
      <div className='w-[45%] h-[50%] bg-black rounded-[30px] flex justify-center  items-center text-white '>
        <div className="p-6">
          <div className="mb-4 flex">
            <label className="big-text mr-40">Header:</label>
            <button
              className={`px-4 py-2 mr-2 ${useHeader1 ? "bg-blue-500 text-white" : "bg-gray-200"
                } rounded`}
              onClick={() => setUseHeader1(true)}
            >
              Header 1
            </button>
            <button
              className={`px-4 py-2 ${!useHeader1 ? "bg-blue-500 text-white" : "bg-gray-200"
                } rounded`}
              onClick={() => setUseHeader1(false)}
            >
              Header 2
            </button>
          </div>
          <div>
            <label className="big-text mr-[172px]">Footer:</label>
            <button
              className={`px-4 py-2 mr-2 ${useFooter1 ? "bg-green-500 text-white" : "bg-gray-200"
                } rounded`}
              onClick={() => setUseFooter1(true)}
            >
              Footer 1
            </button>
            <button
              className={`px-4 py-2 ${!useFooter1 ? "bg-green-500 text-white" : "bg-gray-200"
                } rounded`}
              onClick={() => setUseFooter1(false)}
            >
              Footer 2
            </button>
          </div>
          {/* Homepage Ayarı */}
          <div>
            <label className="big-text mr-[80px]">Homepage:</label>
            <button
              className={`px-4 py-2 mr-2 ${useHomepage1 ? "bg-yellow-500 text-white" : "bg-gray-200"
                } rounded`}
              onClick={() => setUseHomepage1(true)}
            >
              Homepage 1
            </button>
            <button
              className={`px-4 py-2 ${!useHomepage1 ? "bg-yellow-500 text-white" : "bg-gray-200"
                } rounded`}
              onClick={() => setUseHomepage1(false)}
            >
              Homepage 2
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PageControl
