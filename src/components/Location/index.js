import React from 'react'

export default function Location() {
    return (
        <div className="location_wrapper">
            <iframe title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.223025860148!2d55.27489368172432!3d25.201342128230348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sThe%20Dubai%20Mall!5e0!3m2!1sen!2sae!4v1580824744392!5m2!1sen!2sae" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen="" >
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
            
        </div>
    )
}
