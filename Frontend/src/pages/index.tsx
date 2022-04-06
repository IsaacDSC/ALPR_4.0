import React from "react";
import Webcam from "react-webcam";
import { useState } from 'react'


export const Index = () => {
    const [camera, setCamera] = useState(false)
    return (
        <div className="container-scroller">
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-between">
                    <h1>ALPR System</h1>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
                    <div className="d-none d-lg-flex">
                        <h1>Sistema ALPR desenvolvido para Estacionamentos</h1>
                    </div>
                    <h5>Desenvolvido por: João pedro Thomaz de Paula</h5>
                </div>
            </nav>

            <div className="container-fluid page-body-wrapper">
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav">

                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" data-target="#config" data-whatever="@getbootstrap">
                                <span className="menu-title">Configuração</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="d-xl-flex justify-content-between align-items-center mb-4 pb-2">
                            <div className="text-light">
                                <h2 className="mb-1 font-weight-bold">Bem Vindo</h2>
                                <p className="text-small mb-0">Projeto desenvolvido para fins Acadêmicos</p>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-3 grid-margin stretch-card">
                                <div className="card bg-primary text-white text-center">
                                    <div className="card-body">
                                        <h1 className="font-weight-bold mb-4 pb-2 pt-4">Veículos Cadastrados</h1>
                                        <h2 className="font-weight-bold display-3 mt-4 mb-4">10</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 grid-margin stretch-card">
                                <div className="card bg-primary text-white text-center">
                                    <div className="card-body">
                                        <h1 className="font-weight-bold mb-4 pb-2 pt-4">Total de Vagas</h1>
                                        <h2 className="font-weight-bold display-3 mt-4 mb-4">40</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3  grid-margin stretch-card">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="plan-icon-circle pt-3">
                                        </div>
                                        <h1 className="font-weight-bold mb-2 text-light">30</h1>
                                        <p className="text-muted mb-3">Vagas Disponíveis</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3  grid-margin stretch-card">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="plan-icon-circle pt-3">
                                        </div>
                                        <h1 className="font-weight-bold mb-2 text-light">10</h1>
                                        <p className="text-muted mb-3">Vagas Ocupadas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">N° de veículos por Mês</h4>
                                        <canvas id="areaChart"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">N° de veículos por Dia</h4>
                                        <canvas id="lineChart"></canvas>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="modal fade" id="EntradaVeiculo" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="ModalLabel">Entrada de Veículo</h3>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label className="col-form-label">Placa:</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label">Modelo:</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label">Horário de Entrada:</label>
                                                <div className="input-group date" id="timepicker-example" data-target-input="nearest">
                                                    <div className="input-group" data-target="#timepicker-example" data-toggle="datetimepicker">
                                                        <input type="text" className="form-control datetimepicker-input" data-target="#timepicker-example" />
                                                        <div className="input-group-addon input-group-append"><i className="mdi mdi-clock input-group-text"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success">CONFIRMAR</button>
                                        <button type="button" className="btn btn-light" data-dismiss="modal">FECHAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="SaidaVeiculo" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="ModalLabel">Saída de Veículo</h3>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label className="col-form-label">Placa:</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label">Modelo:</label>
                                                <output className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label">Horário de Entrada:</label>
                                                <div className="input-group date" id="timepicker-example" data-target-input="nearest">
                                                    <div className="input-group" data-target="#timepicker-example" data-toggle="datetimepicker">
                                                        <output className="form-control datetimepicker-input" data-target="#timepicker-example" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label">Horário de Saída:</label>
                                                <div className="input-group date" id="timepicker-example2" data-target-input="nearest">
                                                    <div className="input-group" data-target="#timepicker-example2" data-toggle="datetimepicker">
                                                        <input type="text" className="form-control datetimepicker-input" data-target="#timepicker-example2" />
                                                        <div className="input-group-addon input-group-append"><i className="mdi mdi-clock input-group-text"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label">Valor a Receber:</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-primary text-white">R$</span>
                                                    </div>
                                                    <output className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success">CONFIRMAR</button>
                                        <button type="button" className="btn btn-light" data-dismiss="modal">FECHAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Ações</h4>
                                        <div className="template-demo">
                                            <button type="button" className="btn btn-info btn-lg btn-block" data-toggle="modal" data-target="#EntradaVeiculo">Entrada de Veículo</button>
                                            <button type="button" className="btn btn-dark btn-lg btn-block" data-toggle="modal" data-target="#SaidaVeiculo" data-whatever="@fat">Saída de Veículo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 grid-margin stretch-card">
                                <div className="card">
                                    <div id="camera">
                                    <Webcam />
                                        {/* <video id="video"></video> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content-wrapper">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Lista de Carros</h4>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table id="order-listing" className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Placa</th>
                                                            <th>Modelo</th>
                                                            <th>Entrada</th>
                                                            <th>Saída</th>
                                                            <th>Valor</th>
                                                            <th>Status</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>XXX-4997</td>
                                                            <td>FIAT UNO VIVACE-PRATA</td>
                                                            <td>01/01/2001 13:13:13</td>
                                                            <td>X</td>
                                                            <td>X</td>
                                                            <td>
                                                                <label className="badge badge-danger">Pendente</label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>XXX-5598</td>
                                                            <td>GOL G4-PRETO</td>
                                                            <td>01/01/2001 13:13:13</td>
                                                            <td>01/01/2001 16:30:30</td>
                                                            <td>R$10.00</td>
                                                            <td>
                                                                <label className="badge badge-success">Fechado</label>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="footer">
                        <div className="d-sm-flex justify-content-center justify-content-sm-between">
                            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2022 <a target="_blank">JPTHP</a>. All rights reserved. Terms of use | Privacy Policy</span>
                            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Projeto com fins acadêmicos</span>
                        </div>
                    </footer>
                    <div className="modal fade" id="config" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title" id="ModalLabel">Configuração</h3>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="col-form-label">Nome Estabelecimento: </label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">Valor por hora:</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text bg-primary text-white">R$</span>
                                                </div>
                                                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label >HORA FRACIONADA</label>
                                            <select className="form-control form-control-sm" id="exampleFormControlSelect3">
                                                <option>SIM</option>
                                                <option>NAO</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success">CONFIRMAR</button>
                                    <button type="button" className="btn btn-light" data-dismiss="modal">FECHAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}