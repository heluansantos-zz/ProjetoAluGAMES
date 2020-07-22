import React from 'react'
import {Link, useHistory } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo-center.png"
import logoUm from "../../assets/logo-dois.png"
export default function AboutUser() {
    const history = useHistory();
    return(
        <div className="master">
            <div className="container">
                <header>
                    <img src={logo} height="30"/>
                    <img src={logoUm} height="35"/>
                </header>
                <br/>
                <div className="contrato flex">
                    <h3>Contrato de Licença para usuário final</h3>
                    <br/><br></br>
                    <h4>Por favor, leia cuidadosamente este Contrato antes de utilizar o software
                        Alugames (o “AluGAMES”) e todos os serviços nele oferecidos pela 
                        Equipe de Desenvolvimento R2HF. Ao utilizar o Software, você concorda e aceita os termos e condições deste Contrato.
                        Caso não concorde, não use o Software AluGAMES e os serviços R2HF.
                        </h4>
                        <br/><br></br>
                        <h4>Este Contrato de Licença de Usuário Final é um acordo fictício entre o usuário
                            pessoa física ou jurídica e a R2HF, Grupo de desenvolvimento composto por Renan Santana - renan.nascimento.santana@hotmail.com, 
                            Robson Ruan - robsonruan.santana@gmail.com, Fernando Dutra - fernandozek@hotmail.com e Heluan Caetano - heluan.caetano@gmail.com,
                            ambos ingressados no curso Bacharelado Interdisciplinar em Tecnologia da Informação da Universidade Federal Rural do Semiárido, 
                            cursando a disciplina EXA0162, datada no Período Suplementar Excepcional - (2020 .3 - T01);
                            estabelecidos na disciplina de Engenharia de Software ministrada pela Profª Drª Yaskara Ygara Menescal Pinto Fernandes,
                            diretamente contatada no e-mail yaskaramenescal@ufersa.edu.br, atuante pelo Departamento de Computação da Universidade
                            Federal Rural do Semiárido;
                            detentora da marca R2HF para uso do Sistema Web Alugames, que incluem sistemas, sites e qualquer serviço prestado
                            pela R2HF, pelo prazo em que utilizá­lo.
                        </h4>
                        <hr></hr>
                        <u><h4 className="title">A utilização de todo e qualquer serviço prestado pela R2HF, está condicionada ao aceite deste termo
                            na sua totalidade.</h4></u>
                    <br/><br/><br></br>
                    <h5>DECLARAÇÃO DE VONTADE</h5>
                    <p>O USUÁRIO declara ter lido, compreendido e aceito todos os termos e condições
                        deste termo, e declara, ainda, ter ciência dos direitos e obrigações nele contido,
                        constituindo este instrumento o acordo completo entre as partes.</p>
                    <br/><br></br>
                    <h5>LICENÇA DE USO DO SOFTWARE</h5>
                    <ul>
                        <li><p>A R2HF, que é proprietária e legítima possuidora de todos os direitos
                            sobre o AluGAMES, licencia, enquanto viger este termo, ao USUÁRIO o direito de
                            uso não exclusivo, intransferível a terceiros, sob qualquer forma ou condição. Ao
                            utilizar o AluGAMES, mesmo que parcial ou a título de teste, o USUÁRIO estará
                            vinculado aos termos deste termo, concordando com os mesmos. Em caso de
                            discordância dos termos aqui apresentados, a utilização do AluGAMES deve ser
                            imediatamente interrompida.
                            </p></li>
                        <li><p>Sujeito aos termos e condições do presente instrumento, este termo concede ao
                            USUÁRIO uma licença revogável, não exclusiva e intransferível para usar o
                            AluGAMES. O USUÁRIO não poderá utilizar e nem permitir o uso do AluGAMES
                            para outra finalidade que não seja o uso interno. Esta licença não implica na
                            capacidade de acessar outros softwares além daqueles originalmente localizados
                            no AluGAMES. Em nenhuma hipótese o USUÁRIO terá acesso ao código fonte
                            do AluGAMES ora licenciado, por este se tratar de propriedade intelectual da
                            R2HF.
                            </p></li>
                        <li><p>A licença atribuída a este termo restringe-­se na utilização do AluGAMES nos
                            limites necessários para a prestação do serviço pela R2HF. O USUÁRIO
                            não adquire, pelo presente instrumento, nenhum direito de propriedade intelectual
                            ou outros direitos exclusivos, incluindo patentes, desenhos, marcas, direitos
                            autorais ou direitos sobre informações confidenciais ou segredos de negócio, sobre
                            ou relacionados ao AluGAMES ou nenhuma parte dele. O USUÁRIO também não
                            adquire nenhum direito sobre ou relacionado ao AluGAMES ou qualquer
                            componente dele, além dos direitos expressamente licenciados ao mesmo sob o
                            presente termo ou em qualquer outro contrato mutuamente acordado
                            que o USUÁRIO possa ter celebrado com a R2HF. Quaisquer direitos não
                            expressamente concedidos sob o presente instrumento são reservados.
                            </p></li>
                    </ul>
                    <br/><br></br>
                    <h5>DO PRAZO E RESCISÃO</h5>
                    <ul>
                        <li><p>O presente termo entra em vigor na data de seu aceite pelo USUÁRIO.
                        </p></li>
                        <li><p>O prazo de licenciamento vigorará pelo prazo indeterminado, porém poderá ser
                            rescindido a qualquer tempo, por qualquer das partes, desde que denunciado com
                            30 (trinta) dias de antecedência;
                            </p></li>
                        <li><p> A rescisão não trará ônus para qualquer uma das partes;</p></li>
                        <li><p>Quando a rescisão deste termo for solicitada pelo USUÁRIO, será concedido ao
                            USUÁRIO um prazo de até 30 (dias), destinados as providências de encerramento;</p></li>
                    </ul>
                    <br/><br></br>
                    <h5>DAS OBRIGAÇÕES DO USUÁRIO</h5>
                    <ul>
                        <li><p>Manter, a seus dispêndios, acesso a Internet banda larga para utilizar o
                            AluGAMES</p></li>
                        <li><p>Acessar o AluGAMES via browser recomendado pelo R2HF e mantê-­lo
                            sempre atualizado na última versão do fabricante;
                            </p></li>
                        <li><p>Comunicar-­se oficialmente com a R2HF pelo e­-mail
                            suporte@r2hf.com ou heluan.caetano@gmail.com;
                            </p></li>
                        <li><p>Manter, a seus dispêndios, um endereço de e­mail, válido e frequentemente lido,
                            nos cadastros da R2HF para que ela possa se comunicar de forma oficial;</p></li>
                        <li><p>Relatar de forma clara a ocorrência qualquer problema de natureza técnica e,
                            caso necessário, prover relatórios, acesso ao SOFTWARE e informações necessárias
                            para a R2HF oferecer suporte técnico;</p></li>
                        <li><p>Responder por toda e qualquer informação ou conteúdos inseridos no
                            AluGAMES, pelo cadastramento, permissões e senhas. A LICENCIANTE em hipótese alguma será responsável pelo conteúdo
                            (informações, senhas, cópias de informações, etc) sobre o AluGAMES, não sendo,
                            portanto, estas informações revisadas em momento algum. A responsabilidade pelas
                            informações do SOFTWARE é sempre do USUÁRIO;
                            </p></li>
                        <li><p>Não enviar emails indesejados em massa (SPAM);</p></li>
                        <li><p>Não publicar, por intermédio do chat AluGAMES, material racista, pornográfico,
                            ofensivo, protegido por direitos autorais, calunioso ou difamatório;</p></li>
                    </ul>
                    <br/><br></br>
                    <h5>DAS OBRIGAÇÕES DA LICENCIANTE</h5>
                    <ul>
                        <li><p>Manter o AluGAMES funcionando regularmente, desde que o USUÁRIO siga as
                            orientações da R2HF e respeite as condições de uso definidas neste
                            instrumento;
                            </p></li>
                        <li><p>Esforçar­-se para corrigir prontamente possíveis falhas do AluGAMES</p></li>
                        <li><p>Aplicar melhorias contínuas ao AluGAMES, alterando quando necessário,
                            especificações e orientações anteriores;</p></li>
                        <li><p>Suspender o acesso ao AluGAMES caso haja violação ou desrespeito às regras
                            deste termo ou legislação vigente, independente de aviso prévio;</p></li>
                        <li><p>Dar suporte a utilização do AluGAMES em horário comercial, no fuso horário de
                            Brasília, pelo e-mail suporte@r2hf.com;
                            </p></li>
                        <li><p>Manter sigilo absoluto sobre toda e qualquer informação, que de qualquer forma ou
                            em qualquer época lhe for confiada pelo USUÁRIO.
                            </p></li>
                    </ul>
                    <br/><br></br>
                    <h5>DAS GARANTIAS LIMITADAS</h5>
                    <ul>
                        <li><p>O estágio tecnológico não permite garantir que o AluGAMES contratado, não apresente erros,
                            incorreções, vícios e defeitos, ou que a operação será ininterrupta, assim sendo a
                            R2HF também não os garante;
                            </p></li>
                        <li><p>O AluGAMES por ter sido desenvolvido para atender certas
                            demandas dos mais diversos usuários, a R2HF não garante que o mesmo
                            atenda mais que o especificado;
                            </p></li>
                        <li><p> A R2HF não garante que o AluGAMES seja compatível com qualquer outro;</p></li>
                        <li><p>O USUÁRIO reconhece que o AluGAMES não deve ser utilizado em ambientes
                            nos quais a falha, a indisponibilidade, o atraso, o erro ou a inexatidão de conteúdo
                            possam ocasionar morte, danos pessoais, físicos ou ambientais.
                            </p></li>
                    </ul>
                    <br/><br></br>
                    <h5>DA PROPRIEDADE INTELECTUAL</h5>
                    <ul>
                        <li><p>O USUÁRIO não adquire, pelo presente instrumento, nenhum
                            direito de propriedade intelectual ou direito sobre o AluGAMES e seus
                            componentes, assim não terá, em nenhuma hipótese, acesso ao seu código fonte;</p></li>
                        <li><p>O AluGAMES, o logotipo, a marca, as insígnias, os símbolos, os manuais, a
                            documentação técnica ou qualquer outro material correlato ao SOFTWARE,
                            constituem direitos autorais, segredos comerciais de propriedades da
                            R2HF;
                            </p></li>
                        <li><p> É terminantemente proibido ao USUÁRIO ceder, doar, alugar,
                            vender, arrendar, emprestar, reproduzir, modificar, adaptar, traduzir o código fonte,
                            disponibilizar o acesso a terceiros via online, acesso remoto ou de outra forma
                            qualquer, incorporar a outros programas ou sistemas, próprios ou de terceiros,
                            oferecer em garantia ou penhor, alienar ou transferir, total ou parcialmente o
                            SOFTWARE ou parte dele. O USUÁRIO se responsabiliza integralmente por
                            qualquer infração à propriedade intelectual da R2HF;
                            </p></li>
                        <li><p>Quaisquer direitos não expressamente concedidos sob o presente instrumento são
                            reservados inteiramente à R2HF.
                            </p></li>
                    </ul>
                    <br/><br></br>
                    <h5>DAS DISPOSIÇÕES GERAIS</h5>
                    <ul>
                        <li><p>Este termo tem por objetivo regular as ações de ambas as partes, todavia qualquer
                            uma delas poderá tolerar algum descumprimento de algum item, sem que isso
                            implique em novação ou renúncia de direito. A parte tolerante poderá, a qualquer
                            tempo, exigir da outra parte o fiel e cabal cumprimento deste termo;
                            </p></li>
                        <li><p>Não constituem causa de rescisão contratual, o não cumprimento das obrigações
                            aqui assumidas em decorrência de fatos que independam da vontade das partes,
                            tais como os que configuram o caso fortuito e a força maior previstos no artigo 393
                            do Código Civil Brasileiro;</p></li>
                        <li><p>A R2HF, na execução do presente termo, sem prejuízo de suas
                            responsabilidades contratuais e legais poderá utilizar, se necessário, o apoio
                            técnico especializado de terceiros, pessoas físicas ou jurídicas independentemente
                            de prévia notificação ao USUÁRIO, desde que não haja custos posteriores ao
                            USUÁRIO;</p></li>
                        <li><p>Caso o USUÁRIO venha a desenvolver um novo módulo ou produto que
                            caracterize cópia, de todo ou em parte, quer seja do dicionário de dados, quer seja
                            do programa, será considerado como parte do software fornecido pela
                            R2HF, ficando, portanto, sua propriedade incorporada pela licenciante
                            e seu uso condicionado a estas cláusulas contratuais;</p></li>
                        <li><p>A R2HF reserva­-se o direito de comunicar as atividades de treinamento,
                            as campanhas publicitárias, e todos os demais eventos, por ela patrocinados, via
                            correio eletrônico, com o que concorda o USUÁRIO;
                            </p></li>
                        <li><p> A R2HF visando desenvolver melhorias ao SOFTWARE poderá, com o
                            fim específico de estudar, analisar dados, elaborar estatística e, sempre sem
                            identificação pessoal ou comercial, utilizar as informações do SOFTWARE, com o
                            quer concorda e autoriza o USUÁRIO;
                            </p></li>
                        <li><p>A R2HF reserva­-se o direito de ceder licenças de uso do SOFTWARE
                            a tantos USUÁRIOS quantos entender conveniente.
                            </p></li>
                    </ul>
                    <br/><br></br>
                </div>
                
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </div>
            <div className="rodape">
                AluGAMES | <img src={logo}/><br></br>
                © Copyright - All rights reserved 2020
            </div>
        </div>
    )
}


  
