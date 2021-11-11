<?php

namespace App\Modules\Categorie\Models;

use App\Modules\Actualite\Models\Actualite;
use App\Modules\Document\Models\Document;
use App\Modules\Evenement\Models\Evenement;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;
    protected $guarded = ["id"];
    public function actualites()
    {
        return $this->morphedByMany(Actualite::class, 'categorable');
    }
    public function documents()
    {
        return $this->morphedByMany(Document::class, 'categorable');
    }
    public function evenements()
    {
        return $this->morphedByMany(Evenement::class, 'categorable');
    }
}
