import { useNavigate } from 'react-router-dom'
import Notification from '../components/Notification'
import LoginForm from '../forms/LoginForm'
import useAuth from '../hooks/useAuth'
import { useLoginMutation } from '../utils/graphql'
import * as React from 'react'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [userLogin, { error }] = useLoginMutation({
    onError: err => console.error(err),
    onCompleted: ({ login: data }) => {
      login(data)
      navigate('/')
    },
    update(cache, { data }) {
      cache.modify({
        fields: {
          user() {
            return data?.login.user
          },
        },
      })
    },
  })

  if (!login) {
    console.error(`${login}`)
  }

  return (
    <main>
      <h1>Log in</h1>
      {error && <Notification>Error: {error.message}</Notification>}
      <LoginForm
        onSubmit={({ email, password }) =>
          userLogin({ variables: { input: { email, password } } })
        }
      />
    </main>
  )
}

export default Login
