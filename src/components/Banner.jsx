import main from '../images/task1.png'

function Banner() {
    return (
        <div>
              <div className="grid grid-cols-2 items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-rose-600 pb-3">Task  Management</h1>
                        <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                    </div>
                    <div className="mx-auto">
                        <img src={main} alt="" />
                    </div>
                </div>
        </div>
    );
}

export default Banner;