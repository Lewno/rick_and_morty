import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterDetail, cleanDetail } from "../redux/actions";

const useCharacter = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterDetail);
  const { detailId } = useParams();

  useEffect(() => {
    dispatch(getCharacterDetail(detailId));

    return () => {
      dispatch(cleanDetail());
    };
  }, [detailId]);

  return character;
};

export default useCharacter;
