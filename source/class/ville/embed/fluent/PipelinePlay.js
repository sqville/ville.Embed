/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PipelinePlay",
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

   var pathdregular = "M2 5.5a1.5 1.5 0 1 1 3 0V6h10v-.5a1.5 1.5 0 0 1 3 0v4.76a5.5 5.5 0 0 0-1-.66V5.5a.5.5 0 0 0-1 0v3.7c-.32-.08-.66-.15-1-.18V7H5v6h4.2c-.08.32-.15.66-.18 1H5v.5a1.5 1.5 0 0 1-3 0v-9Zm2 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Zm15 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z";
   var pathdfilled = "M2 5.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0v-9Zm12 3.52A5.5 5.5 0 0 0 9.02 14H6V6h8v3.02Zm1-3.52v3.52c1.13.1 2.17.55 3 1.24V5.5a1.5 1.5 0 0 0-3 0Zm4 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z";
   
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