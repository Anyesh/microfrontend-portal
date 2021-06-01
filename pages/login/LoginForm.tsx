import { LoginUserData } from '@types'
import React from 'react'

export default function LoginForm({
  state,
  handleChange,
  handleSubmission,
}: {
  state: LoginUserData
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  handleSubmission: React.FormEventHandler<HTMLFormElement>
}): React.ReactElement {
  return (
    <>
      <form className="mt-5 mb-3 flex flex-col dark:text-nord0" onSubmit={handleSubmission}>
        <input
          type="text"
          placeholder="Username or Email"
          name="username"
          required={true}
          value={state.username}
          onChange={handleChange}
          className="input dark:bg-nord4"
          autoFocus
        />
        <input
          type="password"
          placeholder="Pasword"
          name="password"
          required={true}
          value={state.password}
          onChange={handleChange}
          className="input dark:bg-nord4"
        />
        <button className="btn bg-nord10 hover:bg-nord9" type="submit">
          Login
        </button>
        <a
          className="light:text-nord10 dark:text-nord4 my-2 hover:text-nord10 text-center"
          href="#"
        >
          Forgot your password?
        </a>
      </form>
    </>
  )
}
