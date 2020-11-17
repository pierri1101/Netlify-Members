<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('Publicações')" />
        <div class="separator mb-4"></div>
      </b-colxx>
    </b-row>
    <b-colxx xl="12" lg="12" class="mb-4">
      <tickets></tickets>
      </b-colxx>
  </div>
</template>

<script>
import GradientCard from "../../../components/Cards/GradientCard";
import GradientWithRadialProgressCard from "../../../components/Cards/GradientWithRadialProgressCard";
import AdvancedSearch from "../../../containers/dashboards/AdvancedSearch";
import BestSellers from "../../../containers/dashboards/BestSellers";
import Cakes from "../../../containers/dashboards/Cakes";
import Calendar from "../../../containers/dashboards/Calendar";
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import Logs from "../../../containers/dashboards/Logs";
import Tickets from "../../../containers/dashboards/Tickets";
import ProductCategoriesPolarArea from "../../../containers/dashboards/ProductCategoriesPolarArea";
import ProfileStatuses from "../../../containers/dashboards/ProfileStatuses";
import RecentOrders from "../../../containers/dashboards/RecentOrders";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
import SmallLineCharts from "../../../containers/dashboards/SmallLineCharts";
import SortableStaticticsRow from "../../../containers/dashboards/SortableStaticticsRow";
import TopRatedItems from "../../../containers/dashboards/TopRatedItems";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";

export default {
  components: {
    "advanced-search": AdvancedSearch,
    "best-sellers": BestSellers,
    cakes: Cakes,
    calendar: Calendar,
    "converconversion-rates-chart-card": ConversionRatesChartCard,
    "icon-cards-carousel": IconCardsCarousel,
    logs: Logs,
    tickets: Tickets,
    "product-categories-polar-area": ProductCategoriesPolarArea,
    "profile-statuses": ProfileStatuses,
    "recent-orders": RecentOrders,
    "sales-chart-card": SalesChartCard,
    "small-line-charts": SmallLineCharts,
    "sortable-statictics-row": SortableStaticticsRow,
    "top-rated-items": TopRatedItems,
    "website-visit-chart-card": WebsiteVisitsChartCard,
    "gradient-card": GradientCard,
    "gradient-with-radial-progress-card": GradientWithRadialProgressCard
  }
};
</script>
