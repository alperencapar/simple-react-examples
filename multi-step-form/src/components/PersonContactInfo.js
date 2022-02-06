import React from "react";
import Input from "./Input";

const PersonContactInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <Input
                type={"tel"}
                name={"phone"}
                placeholder={"Telefon Numaranız"}
                value={formData.phone}
                onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                }
            />
            <Input
                type={"text"}
                name={"address"}
                placeholder={"Adresiniz"}
                value={formData.address}
                onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                }
            />
        </div>
    );
};

export default PersonContactInfo;
