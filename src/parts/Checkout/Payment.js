import React from "react";
import Fade from "react-awesome-reveal";

import logoBca from "assets/images/logo-bca.png";
import logoMandiri from "assets/images/logo-mandiri.png";
import InputFile from "element/Form/InputFile";
import InputText from "element/Form/InputText";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <p className="mb-4">Transfer Pembayaran:</p>
            <p>Tax: {tax}%</p>
            <p>Sub total: ${subTotal} USD</p>
            <p>Total: ${grandTotal} USD</p>
            <div className="row mt-4">
              <div className="col-3 text-right">
                <img src={logoBca} alt="Bank Central Asia" width="60" />
              </div>
              <div className="col">
                <dl>
                  <dd>Bank Central Asia</dd>
                  <dd>1903 2004</dd>
                  <dd>Tedy A</dd>
                </dl>
              </div>
            </div>

            <div className="row">
              <div className="col-3 text-right">
                <img src={logoMandiri} alt="Bank Mandiri" width="60" />
              </div>
              <div className="col">
                <dl>
                  <dd>Bank Mandiri</dd>
                  <dd>1903 2004</dd>
                  <dd>Tedy A</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
            <InputFile
              accept="image/*"
              id="proofPayment"
              name="proofPayment"
              value={data.proofPayment}
              onChange={props.onChange}
            />

            <label htmlFor="bankName">Asal Bank</label>
            <InputText
              id="bankName"
              name="bankName"
              type="text"
              value={data.bankName}
              onChange={props.onChange}
            />

            <label htmlFor="bankHolder">Nama Pengirim</label>
            <InputText
              id="bankHolder"
              name="bankHolder"
              type="text"
              value={data.bankHolder}
              onChange={props.onChange}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
