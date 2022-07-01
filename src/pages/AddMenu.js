import { BrowserRouter, Routes, Route, Link, Switch, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2'
import Url from '../Koneksi';

function AddMenu() {
	const [menu, setMenu] = useState("");
	const [harga, setHarga] = useState("");
	const [deskripsi, setDeskripsi] = useState("");
	const [file, setFile] = useState("");	
	const history = useNavigate();

	async function submitData() {
		const formData = new FormData();
		formData.append('menu',menu); 
		formData.append('harga',harga); 
		formData.append('deskripsi',deskripsi); 
		formData.append('file',file);
		let result = await fetch(Url+"api/addMenu",{
			method : 'post',
			body : formData
		});

		if (result) {
			Swal.fire({
				icon: 'success',
				title: 'Berhasil',
				text: 'Berhasil simpan data',
			});
			history("/");
		}else{
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong!'
			});
		}

	}

	return(
		<>
		<div className="col-lg-6">
		    <div className="card">
		        <div className="card-body" style={{ textAlign : "left"}}>
		    	<h4 className="header-title">Tambah Menu Holywing</h4>
				<p className="sub-header">Dibawah ini adalah tambah list menu Holywing</p>  
			        	<div className="form-group">
	                        <label for="exampleInputEmail1">Menu</label>
	                        <input type="text" 
	                        	   onChange={(e)=>setMenu(e.target.value)}
	                        	   className="form-control" 
	                        	   placeholder="Nama Menu" />
	                    </div>
	                    <div className="form-group">
	                        <label for="exampleInputEmail1">Harga</label>
	                        <input type="text" 
	                        	   onChange={(e)=>setHarga(e.target.value)}
	                        	   className="form-control" placeholder="Harga" />
	                    </div>	
	                     <div className="form-group">
	                        <label for="exampleInputEmail1">Deskripsi</label>
	                        <textarea 
	                        	onChange={(e)=>setDeskripsi(e.target.value)}
	                        	className="form-control" placeholder="Tambahkan deskripsi"></textarea>
	                    </div>
	                     <div className="form-group">
	                        <label for="exampleInputEmail1">Foto</label>
	                        <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="form-control" />
	                    </div>
	                    <br />
	                     <div className="form-group">
	                     <Link to="/"><button className="btn btn-danger">Kembali</button></Link>
	                     <button className="btn btn-primary" onClick={()=>submitData()}>Tambah</button>
	                    </div>
		        </div>
		    </div>
		 </div>
		 </>	
	)
}


export default AddMenu;