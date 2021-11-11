<?php

namespace App\Modules\Evenement\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EvenementController extends Controller
{

    /**
     * Display the module welcome screen
     *
     * @return \Illuminate\Http\Response
     */
    public function welcome()
    {
        return view("Evenement::welcome");
    }
}
