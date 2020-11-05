import { Millisecond } from "italia-ts-commons/lib/units";
import { View } from "native-base";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { H1 } from "../../../../../components/core/typography/H1";
import { GlobalState } from "../../../../../store/reducers/types";
import { useRefreshDataWhenFocus } from "../../../../../utils/hooks/useRefreshDataWhenFocus";
import { bpdDetailsLoadAll } from "../../store/actions/details";
import { bpdPeriodsAmountWalletVisibleSelector } from "../../store/reducers/details/combiner";

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const forceRefreshTime = 30000 as Millisecond;

/**
 * Todo: handle errors
 * @param potPeriods
 */
// const foldPeriods = (potPeriods: pot.Pot<ReadonlyArray<BpdPeriod>, Error>) =>
//   pot.fold(
//     potPeriods,
//     () => null,
//     () => null,
//     _ => null,
//     _ => null,
//     value => null,
//     value => null,
//     value => null,
//     value => null
//   );

/**
 * Render the bpd card in the wallet
 * @constructor
 */
const BpdCardsInWalletContainer: React.FunctionComponent<Props> = props => {
  useRefreshDataWhenFocus(props.load, forceRefreshTime);

  return (
    <View>
      <H1>Ciao</H1>
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  load: () => dispatch(bpdDetailsLoadAll())
});

const mapStateToProps = (state: GlobalState) => ({
  periodsWithAmount: bpdPeriodsAmountWalletVisibleSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BpdCardsInWalletContainer);
