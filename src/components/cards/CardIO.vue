<template>
    <div class="card mb-10">
        <!--begin::Header-->
        <div class="card-header card-header-stretch d-flex align-items-center">
            <div class="header d-flex">
                <div class="header-icon">
                    <slot name="header-icon"></slot>
                </div>
                <div class="header-title ms-3">
                    <slot name="header-title"></slot>
                </div>
            </div>
        </div>
        <div class="card-body">
            <slot name="card-content-body"></slot>
        </div>
    </div>
</template>
<style>
    .header-icon i{
        font-size: 1.4em !important;
        color: #00FF7F !important;
    }
    .header-title{
        display: table-cell;
        vertical-align: middle;
        font-size: 15px;
        font-weight: 600;
        font-family: 'Poppins';
        color: #00365D;
    }
</style>