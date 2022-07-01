import {useEffect, useState} from 'react';
import Swal from 'sweetalert2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";
import url from '../Koneksi';


function EditMenu() {
	const { id } = useParams();
	const [menu, setMenu] = useState("");
	const [harga, setHarga] = useState("");
	const [deskripsi, setDeskripsi] = useState("");
	const [file, setFile] = useState("");	
	const [data, setData] = useState([]);	
	const history = useNavigate();

	useEffect(()=>{
		view_data(id);
	},[]);

	async function view_data(id) {
		let result = await fetch(url+"api/UpdateMenu/"+id,{
			method : 'get'
		})
		.then(res => res.json())
		.then(function(result) {
			setData(result);
			setMenu(result.menu);
			setHarga(result.harga);
			setDeskripsi(result.deskripsi);
			setFile(result.setFile);
		});
	}

	async function edit_data(id) {
		const formData = new FormData();
		formData.append('menu',menu); 
		formData.append('harga',harga); 
		formData.append('deskripsi',deskripsi); 
		formData.append('file',file);

		let result = await fetch(url+"api/UpdateMenuAct/"+id,{
			method : 'post',
			body : formData
		});

		if (result) {
			Swal.fire({
				icon: 'success',
				title: 'Berhasil',
				text: 'Berhasil update data',
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

	return (
			<div className="col-lg-6">
			    <div className="card">
			        <div className="card-body" style={{ textAlign : "left"}}>
				    	<h4 className="header-title">Edit Menu Holywing</h4>
						<p className="sub-header">Dibawah ini adalah tambah list menu Holywing</p> 

							<div className="form-group">
		                        <label for="exampleInputEmail1">Menu</label>
		                        <input type="text" 
		                        	   defaultValue={data.menu}
		                        	   onChange={(e)=>setMenu(e.target.value)}
		                        	   className="form-control" 
		                        	   placeholder="Nama Menu" />
		                    </div>
		                    <div className="form-group">
		                        <label for="exampleInputEmail1">Harga</label>
		                        <input type="text" 
		                        	   defaultValue={data.harga}
		                        	   onChange={(e)=>setHarga(e.target.value)}
		                        	   className="form-control" placeholder="Harga" />
		                    </div>	
		                     <div className="form-group">
		                        <label for="exampleInputEmail1">Deskripsi</label>
		                        <textarea 
		                        	defaultValue={data.deskripsi}
		                        	onChange={(e)=>setDeskripsi(e.target.value)}
		                        	className="form-control" placeholder="Tambahkan deskripsi"></textarea>
		                    </div>
		                     <div className="form-group">
		                        <label for="exampleInputEmail1">Foto</label>
		                        <input type="file" 
		                        		defaultValue={data.file_path}
		                        		onChange={(e)=>setFile(e.target.files[0])} 
		                        		className="form-control" />
		                        <br />
		                        <img src={url+data.file_path} style={{width:200}}/>
		                    </div>
		                    <br />
		                     <div className="form-group">
		                     <Link to="/"><button className="btn btn-danger">Kembali</button></Link>
		                     <button className="btn btn-primary" onClick={()=>edit_data(data.id)}>Tambah</button>
		                    </div>
					</div>
				</div>
			</div>
	)
}

export default EditMenu;