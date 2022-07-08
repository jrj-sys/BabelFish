import React from 'react';

function ProfilePage() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    return(
        <section class="vh-100" style="background-color: rgb(231, 131, 37);">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-12 col-xl-4">
                        <div class="card" style="border-radius: 15px;">
                            <div class="card-body text-center">
                                <div class="mt-3 mb-4">
                                    <input 
                                        type='file' 
                                        accept='image/*' 
                                        onChange={handleImageUpload}
                                        ref={imageUploader}
                                        multiple='false' 
                                        style={{
                                            display: 'none'
                                        }}/>
                                    <div
                                        style={{
                                        height: "60px",
                                        width: "60px",
                                        border: "1px dashed black"
                                        }}
                                        onClick={() => imageUploader.current.click()}
                                    >
                                        <img
                                        ref={uploadedImage}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            position: "absolute"
                                        }}
                                        />
                                    </div>
                                </div>
                                <h4 class="mb-2">Your name here</h4>
                                <p class="text-muted mb-4">@Programmer <span class="mx-2">|</span> <a
                                    href="#!">test@gmail.com</a></p>
                                <button type="button" class="btn btn-primary btn-rounded btn-lg">
                                    Message now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}