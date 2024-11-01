import React, { useState } from "react";
import useDeviceInfo from "../../../hooks/useDevice";
import CustomButton from "../../atoms/Button";
import Modal from "../Modal";
import './index.scss';

interface OrderBySelectProps {
  value: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const OrderBySelect = ({ value, onChange }: OrderBySelectProps) => {
  const isMobile = useDeviceInfo(1366);
  const [isOrderByModalOpen, setIsOrderByModalOpen] = useState(false);

  const toggleOrderByModal = () => {
    setIsOrderByModalOpen(!isOrderByModalOpen);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChange(event);
    toggleOrderByModal();
  };

  if (isMobile === true) {
    return (
      <div>
        <CustomButton data-open-modal-btn onClick={toggleOrderByModal} label="Ordenar" />
        <Modal
          data-order-by-overlay
          isOpen={isOrderByModalOpen}
          onClose={toggleOrderByModal}
          title="Ordenar"
        >
          <CustomButton
            value={"most-recent"}
            label="Mais recentes"
            onClick={handleButtonClick}
          />
          <CustomButton
            value={"increasing"}
            label="Menor preo"
            onClick={handleButtonClick}
          />
          <CustomButton
            value={"decreasing"}
            label="Maior preço"
            onClick={handleButtonClick}
          />
        </Modal>
      </div>
    );
  }

  return (
    <select value={value} onChange={onChange} className="orderby-button">
      <option value="default" disabled hidden data-orderby-option>
        Ordenar por:
      </option>
      <option value="most-recent" data-orderby-option>
        Mais recentes
      </option>
      <option value="increasing" data-orderby-option>
        Menor preço
      </option>
      <option value="decreasing" data-orderby-option>
        Maior preço
      </option>
    </select>
  );
};

export default OrderBySelect;
