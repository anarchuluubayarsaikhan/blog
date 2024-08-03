export default function Notfound() {
    return (
        <div className="flex justify-between xl:max-w-screen-xl m-auto py-[100px]">
            <div className="pr-14 pl-72 py-20 text-7xl font-normal text-black">404</div>
            <div className="border-l-2 pl-14 flex flex-col gap-5 pr-72">
                <p className="font-semibold text-2xl text-black">Page Not Found</p>
                <p className="text-lg font-normal text-button-bg">We're sorry, This page is unknown or does not exist the page you are looking for.</p>
                <button className="btn w-[130px] btn-primary">Back To Home</button>
            </div>
        </div>
     
    )
  }