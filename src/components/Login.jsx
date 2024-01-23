import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
      setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
      setInputPw(e.target.value)
    }

    const onClickLogin = () => {
      console.log('click login')
    }

    // useEffect(() => {
    //   axios.get('/user_inform/login')
    //   .then(res => console.log(res))
    //   .catch()
    // },
    // // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    // [])

    return(
      <div className='Wrapper_Login'>
        <div className='Login_Frame'>
          <div className='Container_Login'>
            <div className='Login_Title'>Sign in to your account</div>
            <div className='rememberID'>
              <label htmlFor='input_id'>Email address</label>
              <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
              <label htmlFor='input_pw'>Password</label>
              <input type='text' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>                        
            <div className='buttonList' onClick={onClickLogin}>
              <span>Sign in</span>
            </div>
          </div>
        </div>
      </div> 
    )
}

export default Login;