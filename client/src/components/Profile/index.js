import React from 'react';

function ProfilePage() {
    return(
        <section class="vh-100" style="background-color: rgb(231, 131, 37);">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-12 col-xl-4">
                        <div class="card" style="border-radius: 15px;">
                            <div class="card-body text-center">
                                <div class="mt-3 mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                        class="rounded-circle img-fluid" style="width: 100px;" />
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