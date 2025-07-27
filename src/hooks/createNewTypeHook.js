import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateNewType } from "../store/thunkApi/storeTypesThunk";

const createNewTypeHook = (onClose) => {
    const dispatch = useDispatch();
    
    const [img, setImg] = useState('');
    const [nameAr, setNameAr] = useState('');
    const [nameEn, setNameEn] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);

    const onImageChange = (e) => {
        if(e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }

    const onNameArChange = (e) => {
        setNameAr(e.target.value)
    }
    
    const onNameEnChange = (e) => {
        setNameEn(e.target.value)
    }

    const onIsActiveChange = (e) => {
        setIsActive(e.target.value === "true");
    }

    const validationValues = () => {
        if(nameAr.trim() === '' || nameEn.trim() === '') {
            alert('الرجاء إدخال بياناتك الجديدة أو إغلاق')
            return;
        }
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        validationValues();

        const payload = {
            Name_Ar: nameAr,
            Name_En: nameEn,
            IsActive: isActive,
            Icon_path: "your-uploaded-image.png"
        }

        console.log(payload)
        await dispatch(CreateNewType(payload))
        

        setTimeout(() => {
            onClose();
        }, 3000)
    }

    return [
        img,
        selectedFile,
        onImageChange,
        nameAr,
        onNameArChange,
        nameEn,
        onNameEnChange,
        isActive,
        onIsActiveChange,
        handleEditSubmit
    ]
}

export default createNewTypeHook
