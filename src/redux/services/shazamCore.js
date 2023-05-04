
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({
       reducerPath:'shazamCoreApi',
       baseQuery:fetchBaseQuery({
          baseUrl:'https://shazam-core.p.rapidapi.com/v1',
          prepareHeaders:(headers)=>{
               headers.set('X-RapidAPI-Key', 'fcb44aa933msh45762cffca718aep1cd7b4jsnef9ac44965a0')

               return headers
          },
       }),

       endpoints:(builder)=>({
         getTopCharts:builder.query({query:()=>'/charts/world'}),
       })

})

export const{
     useGetTopChartsQuery,
} = shazamCoreApi 