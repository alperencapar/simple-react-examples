import React from "react";
import Input from "./Input";

const PersonAuthInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <Input
                type={"text"}
                name={"username"}
                placeholder={"Kullanıcı Adı"}
                value={formData.username}
                onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                }
            />
            <Input
                type={"text"}
                name={"fullname"}
                placeholder={"Adınız Soyadınız"}
                value={formData.fullname}
                onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })
                }
            />
            <Input
                type="email"
                name="email"
                placeholder="Emailiniz"
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
            />
        </div>
    );
};

export default PersonAuthInfo;
