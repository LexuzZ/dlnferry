<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JadwalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Informasi',[
            'jadwals' => Jadwal::latest()->paginate(2)
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->validate([
            'nama_kapal' => 'required|min:3',
            'is_complete' => 'boolean'
        ],[
            'nama_kapal.required' => "Nama Kapal tidak boleh kosong",
            'nama_kapal.min' => "Minimal 3 Karakter bro"
        ]);
        Jadwal::create($data);
        return back()->with('message', 'Info Jadwal berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
