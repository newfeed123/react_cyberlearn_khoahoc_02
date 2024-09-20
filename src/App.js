import React, { Component } from 'react';
import ContextDemo from './ContextDemo/ContextDemo';
import ExContextModelList from './ContextDemo/ExContextModelList/ExContextModelList';
// import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket';
// import DemoPureComponent from './DemoPureComponent/DemoPureComponent';
// import BaiTapOanTuXi from './BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi';
// import BaiTapGameXucXac from './BaiTapRedux/BaiTapGameXucXac';
// import BaiTapGioHangRedux from './BaiTapGioHangRedux/BaiTapGioHangRedux';
// import ExerciseCart from './Props/ExerciseCart/ExerciseCart';
// import ProductList from './Props/ProductList';
// import DemoProps from './Props/DemoProps';
// import dataJson from './Data/data.json'
// import DanhSachSanPham from './Props/DanhSachSanPham';
// import ExcerciseCarStore from './Props/ExcerciseCarStore/ExcerciseCarStore';
class App extends Component {
  render() {
    return (
      // <div className='container-fluid'>
      //   {/* <DemoProps></DemoProps> */}
      //   <div className="row">
      //     <div className="col-4">
      //       <div className="nav flex-column nav-pills me-3 justify-content-center" style={{minHeight: 800}} id="v-pills-tab" role="tablist" aria-orientation="vertical">
      //         <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
      //         <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#shop" type="button" role="tab" aria-controls="shop" aria-selected="false">Profile</button>
      //       </div>
      //     </div>
      //     <div className="productList col-8">
      //       <div className="tab-content" id="v-pills-tabContent">
      //         <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      //           <ProductList arrProduct={dataJson}/>
      //         </div>
      //         <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="v-pills-profile-tab">shop</div>
      //       </div>

      //     </div>
      //   </div>
      // </div>

      <div>
        {/* <DanhSachSanPham></DanhSachSanPham> */}
        {/* <ExcerciseCarStore></ExcerciseCarStore> */}
        {/* <DemoProps></DemoProps> */}
        {/* <ExerciseCart></ExerciseCart> */}
        {/* <BaiTapGioHangRedux></BaiTapGioHangRedux> */}
        {/* <BaiTapGameXucXac></BaiTapGameXucXac> */}
        {/* <BaiTapOanTuXi></BaiTapOanTuXi> */}
        {/* <BaiTapBookingTicket></BaiTapBookingTicket> */}
        {/* <DemoPureComponent></DemoPureComponent> */}
        {/* <ContextDemo></ContextDemo> */}
        <ExContextModelList></ExContextModelList>
      </div>
    );
  }
}

export default App;