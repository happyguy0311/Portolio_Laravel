@extends('layouts.app')

@section('title', 'Data Contact')

@section('content')
    <div class="main-content">
        <div class="section__content section__content--p30">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="overview-wrap">
                            <h2 class="title-1">
                                Data Contact
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="table-responsive m-b-40">
                    @include('partials.app.table.index_contact')
                </div>
            </div>
            @include('partials.app.footer')
        </div>
    </div>
@endsection