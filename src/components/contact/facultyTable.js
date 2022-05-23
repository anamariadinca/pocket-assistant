import React, {useEffect} from "react";
import "./contact.css";

function FacultyTable() {
    return(
        <div>
            <table id="facultytable">
                <thead>
                <th>Nume</th>
                <th>Poziție</th>
                <th>Email</th>
                <th>Telefon</th>
                </thead>
                <tbody>
                <tr>
                    <td>Prof. Dr. Ing. Mihnea UDREA</td>
                    <td style={{minWidth: '300px'}}>Decan</td>
                    <td>decanat@electronica.pub.ro</td>
                    <td>0214024618</td>
                </tr>
                <tr>
                    <td>Drd. Ing. Aurelian DERVIŞ</td>
                    <td style={{minWidth: '300px'}}>Administrator IT</td>
                    <td>admin@electronica.pub.ro</td>
                    <td>0214024733</td>
                </tr>
                <tr>
                    <td>Secretariat studenți</td>
                    <td style={{minWidth: '300px'}}>Secretariat</td>
                    <td>secretariat@electronica.pub.ro</td>
                    <td>0214024781;0214024782</td>
                </tr>
                <tr>
                    <td>Lucia CHIRICĂ</td>
                    <td style={{minWidth: '300px'}}>Secretară an II licență si programele de masterat IISC, SIVA, TELECOMUNICATII</td>
                    <td>lucia.chirica@etti.pub.ro</td>
                    <td/>
                </tr>
                <tr>
                    <td>Laura CORNĂȚEANU</td>
                    <td style={{minWidth: '300px'}}>Secretară an III licență si programele de masterat AWC, CMM, CMOB, MSR, TSAC</td>
                    <td>laura.cornateanu@etti.pub.ro</td>
                    <td/>
                </tr>
                <tr>
                    <td>Daniela ARSENE</td>
                    <td style={{minWidth: '300px'}}>Secretară an IV licență si programele de masterat ACES, AM, MN, PCON</td>
                    <td>daniela.arsene@etti.pub.ro</td>
                    <td/>
                </tr>
                <tr>
                    <td>Consuela CHIRIȚĂ</td>
                    <td style={{minWidth: '300px'}}>Secretară an I licență si programele de masterat ICSFET, OE, TAEA</td>
                    <td>consuela.chirita@etti.pub.ro</td>
                    <td/>
                </tr>
                <tr>
                    <td>Ema MOCANU</td>
                    <td style={{minWidth: '300px'}}>Secretară responsabil arhivă si programele de masterat EIA, ELM, TAID, EPIC, BSINF, CSIC, IAM, MS</td>
                    <td>ema@etti.pub.ro</td>
                    <td/>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FacultyTable