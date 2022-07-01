<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
    public function SaveMenu(Request $req)
    {   
        $result = new Menu;
        $result->menu = $req->menu;
        $result->harga = $req->harga;
        $result->deskripsi = $req->deskripsi;   
        $result->file_path = $req->file('file')->store('menu');
        $result->save(); 
        return $result;
    }
    public function GetMenu(){
         return Menu::all();
    }
    public function DeleteMenu($id){
        $result = Menu::where('id',$id)->delete();
        if($result){
            return "Berhasil";
        }else{
            return "Gagal";
        }
    }

    public function UpdateMenu($id)
    {
        $result = Menu::find($id);
        return $result;
    } 

    public function UpdateMenuAct($id, Request $req)
    {
        $result = Menu::find($id);
        $result->menu = $req->menu;
        $result->harga = $req->harga;
        $result->deskripsi = $req->deskripsi;   
        if($req->file('file')){
            $result->file_path = $req->file('file')->store('menu');
        }
        $result->save(); 
    }
}
