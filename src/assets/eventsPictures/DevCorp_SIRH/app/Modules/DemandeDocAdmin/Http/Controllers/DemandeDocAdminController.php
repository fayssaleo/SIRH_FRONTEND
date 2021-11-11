<?php

namespace App\Modules\DemandeDocAdmin\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DemandeDocAdminController extends Controller
{

    /**
     * Display the module welcome screen
     *
     * @return \Illuminate\Http\Response
     */
    public function welcome()
    {
        return view("DemandeDocAdmin::welcome");
    }
}
