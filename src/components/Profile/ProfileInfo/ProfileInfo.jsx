import React from "react"
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1476889932_zakat-derevo.jpg" alt="дерево на закате" />
                <div className={s.descriptionBlock}>ava+description</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
