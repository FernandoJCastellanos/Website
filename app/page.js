"use client"

import App from "./components/App"

import { MyContext, MyContextProvider } from "./MyContext"

export default function Home() {
  return (
    <MyContextProvider>
      <App />
    </MyContextProvider>
  )
}
