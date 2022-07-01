import {useEffect, useState} from 'react';
import url from '../Koneksi';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
function Halaman()
{
	const [data, setData] = useState([]); 
	useEffect(()=>{
		get_menu();
	},[]);
	async function get_menu() {
		let result = await fetch(url+"api/GetMenu",{
			method : 'get'
		})
		.then(res => res.json())
		.then((result) => setData(result));
	}

	async function hapus_menu(id) {
		if(window.confirm('Apakah anda ingin menghapus data ini ?')){
		   let result = await fetch(url+"api/DeleteMenu/"+id,{
		   	  method : 'get'
		   })
		   .then(res => res.json)
		   .then(get_menu());
		}
	}
	return(
	<>
		<div className="col-lg-7">
		    <div className="card">
		    	<div className="card-body" style={{ "text-align" : "left"}}>
		    	  <Link to="/add">
		    		<button className="btn btn-primary"><i className="fa fa-plus"></i> Tambah Menu</button>
		    	  </Link>
		    	</div>
		    </div>
		</div>
		 <div className="col-lg-7">
		    <div className="card">
		        <div className="card-body" style={{ textAlign : "left"}}>
		    	<h4 className="header-title">List Menu Holywing</h4>
				<p className="sub-header">Dibawah ini adalah list menu Holywing</p>  
		        		 <div className="table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <thead className="bg-danger" style={{ color : 'white' }}>
                                            <tr style={{}}>
	                                            <th scope="col" style={{ width:150 }}>Foto</th>
	                                            <th scope="col">Menu</th>
	                                            <th scope="col">Harga</th>
	                                            <th scope="col">Deskripsi</th>
	                                            <th scope="col">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            data.map(item=>(
	                                            <tr>
		                                            <th scope="row"><img style={{ width:150 }} src={url+item.file_path}/></th>
		                                            <td>{item.menu}</td>
		                                            <td>{item.harga}</td>
		                                            <td>{item.deskripsi}</td>
		                                            <td style={{ width : 30 }} nowrap="">
		                                            	<Link to={"/edit/"+item.id}>
		                                            		<button className="btn btn-outline-primary"><i className="fa fa-edit"></i></button>
		                                            	</Link>
		                                            	<button className="btn btn-outline-danger" onClick={()=>hapus_menu(item.id)}><i class="fa fa-trash"></i></button>
		                                            </td>
	                                            </tr>
	                                        ))
                                        }
                                        </tbody>
                                    </table>
                                </div>



		        </div>
		    </div>
		 </div>
	</>
	);
}

export default Halaman;