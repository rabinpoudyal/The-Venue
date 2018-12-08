import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.412651414815!2d85.51622985010293!3d27.632526182738644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f32e11daf7d%3A0xd6fe3eb6acb48e92!2z4KSs4KSo4KWH4KSq4KS-IOCkqOCkvuCksuCkviDgpLjgpKHgpJUsIOCkrOCkqOClh-CkquCkviA0NTIxMA!5e1!3m2!1sne!2snp!4v1544227829524" 
            width="100%" 
            height="450" 
            FrameBorder="0"  
            allowFullSreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;