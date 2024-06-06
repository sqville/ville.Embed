/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingMosque",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M2.5 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm15.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-8.05-.7a.5.5 0 0 0-.4 0h-.02l-.04.02a9.75 9.75 0 0 0-.68.34c-.44.24-1.02.58-1.6 1-.59.42-1.19.94-1.65 1.53A3.38 3.38 0 0 0 5 9c0 .71.15 1.39.42 2H3V6.5a.5.5 0 0 0-1 0V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.5a.5.5 0 0 0-1 0V11h-2.42c.27-.61.42-1.29.42-2 0-.77-.35-1.47-.81-2.06a8.24 8.24 0 0 0-1.65-1.53 14.62 14.62 0 0 0-2.28-1.34l-.04-.02h-.01ZM17 17h-5v-2a2 2 0 1 0-4 0v2H3v-5h14v5Zm-7-3a1 1 0 0 1 1 1v2H9v-2a1 1 0 0 1 1-1Zm3.4-6.44c.39.49.6.97.6 1.44 0 .73-.2 1.41-.54 2H6.54A3.98 3.98 0 0 1 6 9c0-.47.21-.95.6-1.44.38-.5.9-.94 1.44-1.34A13.63 13.63 0 0 1 10 5.05a13.55 13.55 0 0 1 1.96 1.17c.54.4 1.06.85 1.44 1.34Z";
   var pathdfilled = "M3.25 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm14.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-7.3-1.46a.5.5 0 0 0-.4 0l-.02.01-.04.02a9.75 9.75 0 0 0-.68.34c-.44.24-1.02.58-1.6 1-.59.42-1.19.94-1.65 1.53A3.38 3.38 0 0 0 5 9c0 .71.15 1.39.42 2H3V6.5a.5.5 0 0 0-1 0V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6.5a.5.5 0 0 0-1 0V11h-2.42c.27-.61.42-1.29.42-2 0-.77-.35-1.47-.81-2.06a8.24 8.24 0 0 0-1.65-1.53 14.62 14.62 0 0 0-2.28-1.34l-.04-.02h-.01Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});