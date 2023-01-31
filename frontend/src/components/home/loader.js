import React from 'react'

export default function Loader() {
    return (
        <div style={{ "alignItems": "center", "height": "100%"}} className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
