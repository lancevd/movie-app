import React from 'react'

const SingleBody = () => {
  return (
    <div id='single-body' className='container'>
        <div id="single-left"></div>
        <div id="single-right">
            <div id="single-photos">
                <h4>Photos</h4>
                <br />
                <div id="photos-obj">
                    <img src="http://pixner.net/boleto/demo/assets/images/movie/movie-details01.jpg" alt="Photo 1" />

                    <img src="http://pixner.net/boleto/demo/assets/images/movie/movie-details02.jpg" />

                    <img src="http://pixner.net/boleto/demo/assets/images/movie/movie-details03.jpg" alt="Photo 3" />

                </div>
            </div>

            <div className="spacer"></div>

            <div id="mov-summary">
                <h4>Summary</h4>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula eros sit amet est tincidunt aliquet. Fusce laoreet ligula ac ultrices eleifend. Donec hendrerit fringilla odio, ut feugiat mi convallis nec. Fusce elit ex, blandit vitae mattis sit amet, iaculis ac elit. Ut diam mauris, viverra sit amet dictum vel, aliquam ac quam. Ut mi nisl, fringilla sit amet erat et, convallis porttitor ligula. Sed auctor, orci id luctus venenatis, dui dolor euismod risus, et pharetra orci lectus quis sapien. Duis blandit ipsum ac consectetur scelerisque.</p>
            </div>
        </div>
    </div>
  )
}

export default SingleBody