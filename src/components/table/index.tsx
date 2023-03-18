import React from 'react';
import {BsFillInfoCircleFill} from 'react-icons/bs'

interface Props {
  head: {
    key: string;
    hiddenTitle: boolean;
    title: string;
    helpGuide?: string;
  }[];
  data: any[];
  loading: boolean;
  showHeader?: boolean;
}

const Table = ({
  head,
  data,
  loading,
  showHeader,
}: Props) => {
  return (
    <div className="flex flex-col h-full">
      <div className="-my-2 sm:-mx-6 h-full">
        <div className="inline-block min-w-full py-2 align-middle px-0.5 sm:px-6 pb-[60px]">
          <div className="h-full shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-white/5 h-[44px]">
                <tr>
                  {head.map((item, key) => (
                    <th
                      key={key}
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs lg:text-sm  text-white font-bold">
                      <div className="flex items-center">
                        {!item.hiddenTitle && item.title}
                        <span className="ml-2">
                        {item.helpGuide && <BsFillInfoCircleFill />}
                        </span>
      
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ebebf0] bg-white/5">
                {loading ? (
                  <>
                    {mocked.map((_, index) => (
                      <tr key={index} className="h-12 relative">
                        <td>
                          <div className="absolute top-0 w-[98%] ml-4 mt-4 rounded h-4 animate-pulse bg-gray-200 flex" />
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    {data.length ? (
                      <>
                        {data.map((item, key) => (
                          <tr key={key} className="overflow-auto">
                            {head.map((headItem) => (
                              <td
                                key={headItem.key}
                                className="whitespace-nowrap px-3 py-3 text-xs sm:text-sm text-richBlack h-16">
                                {item[headItem.key]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </>
                    ) : (
                      <div className="absolute text-center right-0 left-0 mt-6 text-sm">
                        Lista vazia
                      </div>
                    )}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

//
// Utils
//

const mocked = ['', '', '', '', '', '', '', ''];
