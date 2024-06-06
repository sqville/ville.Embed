/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Bot",
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

   var pathdregular = "M12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm3.5-4a.5.5 0 0 0-1 0V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5ZM6.5 4h7c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5Zm3.75 14c2.62-.04 4.2-.6 5.12-1.44A3.52 3.52 0 0 0 16.5 14h.01v-.69c0-1-.81-1.8-1.8-1.8h-3.2v-.01H5.3c-.99 0-1.8.81-1.8 1.81v.7c.04.77.25 1.75 1.13 2.55.93.84 2.5 1.4 5.12 1.44h.5Zm-4.94-5.5h9.38c.45 0 .81.37.81.81v.44c0 .69-.13 1.46-.8 2.07C14 16.45 12.66 17 10 17s-4.01-.55-4.7-1.18a2.63 2.63 0 0 1-.8-2.07v-.44c0-.44.36-.8.8-.8Z";
   var pathdfilled = "M14.7 11.5c.99 0 1.8.81 1.8 1.81v.7a3.52 3.52 0 0 1-1.13 2.55c-.95.87-2.6 1.44-5.37 1.44s-4.42-.57-5.37-1.44A3.52 3.52 0 0 1 3.5 14H3.5v-.69c0-1 .81-1.8 1.8-1.8h9.4ZM6.5 3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5c0-.3-.22-.5-.5-.5a.5.5 0 0 0-.5.5V3h-3ZM7 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z";
   
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