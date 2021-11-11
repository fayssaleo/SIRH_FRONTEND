<?php

namespace App\Modules\Utilisateur\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Utilisateur\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function create(Request $request){
        $role =new Role;
        $role->name=$request->name;
        $role->save();
        return $role;
    }
    public function getRole($id){
        $role=Role::find($id);
        return $role;
    }

    public function addPrivilege($roleId,$privilegeId){
        $role=Role::find($roleId);
        $privilege=Role::find($privilegeId);
        if($role!=null && $privilege!=null){
            $role->privileges()->sync($privilege);
        }

    }
    public function getRolePrivileges($id){
        $role=Role::find($id);
        return $role->privileges;
    }

}
