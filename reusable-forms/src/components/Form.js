import React from 'react'
import Input from './Input'
import ToggleButton from './ToggleButton'

function Form(){
    return (
        <form method="POST">
            <Input inputElement = {{type: 'text', placeholder: 'Kullanıcı Adı'}} />
            <Input inputElement = {{type: 'email', placeholder: 'E-mail'}} />
            <Input inputElement = {{type: 'password', placeholder: 'Şifre'}} />
            <Input inputElement = {{type:'submit', placeholder: 'Gönder'}} />
            
            {/* class */}
            <ToggleButton />
            

        </form>
    )
}

export default Form